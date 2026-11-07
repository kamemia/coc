import { Head } from "@inertiajs/react";
import { evidence } from "@/routes";
import { Table } from "lucide-react";

interface Evidence {
    id: number;
    name: string;
    description: string;
}

interface Props {
    evidence: Evidence[];
}

export default function Index({ evidence }: Props) {
    return (
        <>
            <Head title="Evidence" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div>
                Just a placeholder for now, but this is where you can add your evidence content. You can use the components provided in the UI library to create a beautiful and functional evidence page.
            </div>
            
                {evidence.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Evidence',
            href: evidence().url,
        },
    ],
};