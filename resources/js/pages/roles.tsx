import { Head } from "@inertiajs/react";
import { roles } from "@/routes";

export default function Roles() {
    return (
        <>
            <Head title="Roles" />
            <div>
                Just a placeholder for now, but this is where you can add your roles content. You can use the components provided in the UI library to create a beautiful and functional roles page.
            </div>
        </>
    );
}

Roles.layout = {
    breadcrumbs: [
        {
            title: 'Roles',
            href: roles(),
        },
    ],
};