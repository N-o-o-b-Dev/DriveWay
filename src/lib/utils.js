import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function generateUniqueId(prefix = 'ID') {
    const random = Math.floor(1000 + Math.random() * 9000); // 4 digit random
    const timestamp = Date.now().toString().slice(-4); // Last 4 digits of timestamp
    return `${prefix}-${timestamp}${random}`;
}
