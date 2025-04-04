import DisplayTrip from "@/components/ui/trips/display-trip/DisplayTrip";

export default async function Page({
    params,
}: {
    params: Promise<{ tripId: number, driverEmail: string }>
}) {
    const { tripId, driverEmail } = await params;
    const uriDecodedDriverEmail = decodeURIComponent(driverEmail);

    if (isNaN(Number(tripId))) return (<div>Trip Id Error</div>)

    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen gap-8 p-8  ">
            <DisplayTrip tripId={tripId} driverEmail={uriDecodedDriverEmail} />
        </div>
    )
}