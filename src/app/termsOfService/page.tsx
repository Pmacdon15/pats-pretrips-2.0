import GoHomeButton from "@/components/ui/go-home-button/GoHomeButton";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen gap-8 p-4">
            <div className="flex flex-col border items-center justify-center rounded-md w-5/6 md:w-3/6 p-8 shadow-md gap-4">
                <h1>Terms of Service</h1>
                <p className="text-sm indent-8 border rounded-sm p-8 shadow-md">
                    Pat&apos;s Pre-Trips is currently in production but please be aware that during this period,
                    data security and stability cannot be guaranteed. Any data you enter into the application may be lost,
                    modified, or compromised from time to time. By using this application, you
                    acknowledge these risks and agree to use the service at your own risk. We recommend not storing any
                    sensitive or critical information until the full release version is available. At this time we offer the service free.
                </p>
                <GoHomeButton />
            </div>
        </div>
    )
}