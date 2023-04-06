import BooksTable from '@/Components/BooksTable';
import FormInsert from '@/Components/FormInsert';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, books, success }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="ml-40 font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">My Library</h2>}
        >
            <Head title="Dashboard" />
           {success && <h2>Libro aggiunto con successo</h2>}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <BooksTable data = {books}></BooksTable>
                    </div>
                </div>
            </div>
              <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <h2 className="title">Inserisci un Libro</h2>
                     <FormInsert>
                     </FormInsert>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
