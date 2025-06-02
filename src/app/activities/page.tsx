import { Footer, Navbar } from "@/components";
import ActivityCard from "@/components/activity-card";

const activities = [
    {
        title: "Outdoor Game",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/image/outdoor-game.jpg"
    },
    {
        title: "Indoor Game",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/image/indoor-game.jpg"
    },
    {
        title: "Dance Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "/image/dance-class.jpg"
    }
]

export default function Activities() {
    return (
        <>
            <Navbar />
            <main className="container mx-auto mt-20 px-10 md:px-0 flex gap-20 flex-col">
                {activities.map((activity, index) => (
                    <ActivityCard key={activity.title} {...activity} reverse={index % 2 !== 0} />
                ))}
            </main>
            <Footer />
        </>

    )
}
