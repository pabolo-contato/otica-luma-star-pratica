import { siteConfig } from "@/lib/site-config"

export type OpenStatus = {
  isOpen: boolean
  label: string
  detail: string
}

const weekdayIndex: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}

const weekdayNames = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
]

function toMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number)
  return hours * 60 + minutes
}

export function formatHour(time: string) {
  const [hours, minutes] = time.split(":")
  return minutes === "00" ? `${hours}h` : `${hours}h${minutes}`
}

function ruleForDay(day: number) {
  return siteConfig.hours.find((rule) => rule.days.includes(day))
}

// Calcula o status da loja no fuso America/Sao_Paulo usando `siteConfig.hours`.
export function getOpenStatus(now: Date = new Date()): OpenStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: siteConfig.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now)

  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? ""
  const day = weekdayIndex[get("weekday")] ?? 0
  const minutes = Number(get("hour")) * 60 + Number(get("minute"))

  const today = ruleForDay(day)
  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return {
      isOpen: true,
      label: "Aberto agora",
      detail: `Fecha às ${formatHour(today.close)}`,
    }
  }

  if (today && minutes < toMinutes(today.open)) {
    return {
      isOpen: false,
      label: "Fechado",
      detail: `Abre hoje às ${formatHour(today.open)}`,
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7
    const rule = ruleForDay(nextDay)
    if (rule) {
      return {
        isOpen: false,
        label: "Fechado",
        detail: `Abre ${weekdayNames[nextDay]} às ${formatHour(rule.open)}`,
      }
    }
  }

  return { isOpen: false, label: "Fechado", detail: "" }
}
