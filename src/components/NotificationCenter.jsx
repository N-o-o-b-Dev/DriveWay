import { useState, useRef, useEffect } from 'react'
import { Bell, AlertTriangle, AlertCircle, X, ExternalLink } from 'lucide-react'
import { useNotifications } from '../hooks/useNotifications'
import { Button } from './ui/Button'
import { useNavigate } from 'react-router-dom'
import { cn } from '../lib/utils'

export function NotificationCenter() {
    const { notifications, unreadCount } = useNotifications()
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)
    const navigate = useNavigate()

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleNotificationClick = (link) => {
        setIsOpen(false)
        if (link) {
            navigate(link)
        }
    }

    return (
        <div className="relative" ref={containerRef}>
            <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Notifications"
            >
                <Bell size={20} />
                {unreadCount > 0 && (
                    <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background animate-pulse" />
                )}
            </Button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 md:w-96 bg-background dark:bg-surface-dark border border-border shadow-xl rounded-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between p-4 border-b bg-muted/30">
                        <h3 className="font-semibold">Notifications</h3>
                        <span className="text-xs text-muted-foreground">{unreadCount} Issues</span>
                    </div>

                    <div className="max-h-[70vh] overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-8 text-center text-muted-foreground">
                                <Bell className="mx-auto h-8 w-8 mb-2 opacity-50" />
                                <p className="text-sm">No new notifications</p>
                            </div>
                        ) : (
                            <div className="divide-y">
                                {notifications.map((n) => (
                                    <div
                                        key={n.id}
                                        className={cn(
                                            "p-4 hover:bg-muted/50 transition-colors cursor-pointer flex gap-3 items-start",
                                            n.severity === 'destructive' ? "bg-red-50/50 dark:bg-red-950/10" : ""
                                        )}
                                        onClick={() => handleNotificationClick(n.link)}
                                    >
                                        <div className="mt-1">
                                            {n.severity === 'destructive' ? (
                                                <AlertCircle className="h-5 w-5 text-destructive" />
                                            ) : (
                                                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                                            )}
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">{n.title}</p>
                                            <p className="text-xs text-muted-foreground">{n.message}</p>
                                        </div>
                                        {n.link && <ExternalLink className="h-4 w-4 text-muted-foreground opacity-50" />}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
