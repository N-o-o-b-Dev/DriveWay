import { useState, useEffect } from 'react'
import { X, Share, Download } from 'lucide-react'
import { Button } from './ui/Button'

export function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const [showIOSPrompt, setShowIOSPrompt] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)

    useEffect(() => {
        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsStandalone(true)
        }

        // Handle Android install prompt
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault()
            setDeferredPrompt(e)
        }

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

        // Detect iOS
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        if (isIOS && !window.matchMedia('(display-mode: standalone)').matches) {
            // Check if it's not already dismissed in session
            const isDismissed = sessionStorage.getItem('iosInstallDismissed')
            if (!isDismissed) {
                setShowIOSPrompt(true)
            }
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
        }
    }, [])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
            setDeferredPrompt(null)
        }
    }

    const dismissIOSPrompt = () => {
        setShowIOSPrompt(false)
        sessionStorage.setItem('iosInstallDismissed', 'true')
    }

    if (isStandalone) return null

    // Android Prompt
    if (deferredPrompt) {
        return (
            <div className="fixed bottom-4 left-4 right-4 z-50 bg-surface dark:bg-surface-dark border border-primary/20 shadow-lg rounded-lg p-4 animate-in slide-in-from-bottom duration-300">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="font-semibold text-primary">Install Driveway</h3>
                        <p className="text-sm text-muted-foreground">Install our app for a better experience</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" onClick={() => setDeferredPrompt(null)}>
                            <X className="h-4 w-4" />
                        </Button>
                        <Button onClick={handleInstallClick} className="gap-2">
                            <Download className="h-4 w-4" /> Install
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

    // iOS Prompt - Prompt user to add app to home screen 
    if (showIOSPrompt) {
        return (
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg animate-in slide-in-from-bottom duration-300 pb-8">
                <div className="max-w-md mx-auto relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -top-2 right-0"
                        onClick={dismissIOSPrompt}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    <div className="flex items-start gap-4 pr-8">
                        <div className="bg-primary/10 p-3 rounded-xl">
                            <Share className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-1">Install Driveway</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                To install this app on your iPhone, tap the <span className="font-bold">Share</span> icon below and select <span className="font-bold">"Add to Home Screen"</span>.
                            </p>
                        </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface dark:bg-surface-dark rotate-45 border-b border-r border-gray-200 dark:border-gray-800"></div>
                </div>
            </div>
        )
    }

    return null
}
