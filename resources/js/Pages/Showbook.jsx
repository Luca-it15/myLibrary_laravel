import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {  Head, Link, useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


export default function Showbook({ auth, book}) {
    const { data, setData, put, processing, errors, recentlySuccessful} = useForm({
        Isbn: book[0].Isbn,
        Titolo: book[0].Titolo,
        Autore: book[0].Autore,
        DataAggiunta: book[0].DataAggiunta,
        Trama: book[0].Trama,
        DataCancellazione: book[0].DataCancellazione,
        NumeroLetture: book[0].NumeroLetture
    });
    const updateBook = (e) => {
        e.preventDefault();

        put(route('updatebook'));
    };

    const deleteBook = (e) => {
        e.preventDefault();

        put(route('deletebook'));
    };
    return (
      <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="ml-40 font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">My Library</h2>}
       >
        <Head title="Showbook" />
         <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
           <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
           <h2 className="title">Informazioni sul Libro</h2>

            <form onSubmit={updateBook} className='form'>
             <div>
             <InputLabel htmlFor="Isbn" value="Isbn" className='label' />

             <TextInput
                id="Isbn"
                type="text"
                name="Isbn"
                value={data.Isbn}
                className="mt-1 block w-full"
                autoComplete="Isbn"
                placeholder="codice Isbn"
                onChange={(e) => setData('Isbn', e.target.value)}
             />

             <InputError message={errors.Isbn} className="mt-2" />
            </div>

            <div className="mt-4">
             <InputLabel htmlFor="Titolo" value="Titolo" className='label' />

             <TextInput
                id="Titolo"
                type="text"
                name="Titolo"
                value={data.Titolo}
                className="mt-1 block w-full"
                autoComplete="Titolo"
                placeholder="Titolo"
                onChange={(e) => setData('Titolo', e.target.value)}
              />

             <InputError message={errors.Titolo} className="mt-2" />
            </div>

            <div className="mt-4">
             <InputLabel htmlFor="Autore" value="Autore" className='label'/>

             <TextInput
                id="Autore"
                type="text"
                name="Autore"
                value={data.Autore}
                className="mt-1 block w-full"
                autoComplete="Autore"
                placeholder="Autore"
                onChange={(e) => setData('Autore', e.target.value)}
             />

             <InputError message={errors.Autore} className="mt-2" />
            </div>

            <div className="mt-4">
             <InputLabel htmlFor="DataAggiunta" value="DataAggiunta" className='label'/>

             <TextInput
                id="DataAggiunta"
                type="date"
                name="DataAggiunta"
                value={data.DataAggiunta}
                className="mt-1 block w-full"
                autoComplete="Data di aggiunta"
                onChange={(e) => setData('DataAggiunta', e.target.value)}
             />

             <InputError message={errors.DataAggiunta} className="mt-2" />
            </div>

            <div className="mt-4">
             <InputLabel htmlFor="Trama" value="Trama" className='label'/>

             <TextInput
                id="Trama"
                type="text"
                name="Trama"
                value={data.Trama}
                className="mt-1 block w-full"
                autoComplete="Trama del libro"
                placeholder="scrivi la trama del libro"
                onChange={(e) => setData('Trama', e.target.value)}
             />

             <InputError message={errors.Trama} className="mt-2" />
             </div>

            <div className="mt-4">
             <InputLabel htmlFor="DataCancellazione" value="Data Cancellazione (se gg/mm/aaaa Libro non Cancellato)" className='label'/>

             <TextInput
                id="DataCancellazione"
                type="date"
                name="DataCancellazione"
                value={data.DataCancellazione}
                className="mt-1 block w-full"
                autoComplete="Data Di Cancellazione"
                placeholder="Non cancellato"
                onChange={(e) => setData('DataCancellazione', e.target.value)}
             />

             <InputError message={errors.Trama} className="mt-2" />
            </div>

            <div className="mt-4">
             <InputLabel htmlFor="NumeroLetture" value="NumeroLetture" className='label'/>

             <TextInput
                id="NumeroLetture"
                type="number"
                name="NumeroLetture"
                value={data.NumeroLetture}
                className="mt-1 block w-full"
                autoComplete="Numero di Letture"
                onChange={(e) => setData('NumeroLetture', e.target.value)}
             />

             <InputError message={errors.NumeroLetture} className="mt-2" />
            </div>
            <div className='pulsanti'>
             <div className="float-right mt-12 mb-12 items-center gap-4">
                    <PrimaryButton className="bg-green-600 pulsante float-right"  disabled={processing}>MODIFICA</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">MODIFICA.</p>
                    </Transition>
             </div>
            </div>
         </form>
        </div>
       </div>
      </div>
      <div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
           <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
           <h2 className="title">Cancella il libro</h2>
            <p className='subtitle'>Se sei sicuro di voler cancellare il libro, premi su cancella</p>

            <form onSubmit={deleteBook} className='form'>
             <div>
             <InputLabel htmlFor="Isbn" value="Isbn del libro che si vuole cancellare" className='label'/>

             <TextInput
                id="Isbn"
                type="text"
                name="Isbn"
                value={data.Isbn}
                className="mt-1 block w-full"
                autoComplete="Isbn"
                placeholder="Inserisci il codice Isbn del libro che vuoi cancellare"
                onChange={(e) => setData('Isbn', e.target.value)}
                readonly="true"
             />

             <InputError message={errors.Isbn} className="mt-2" />
            </div>
            <div className='pulsanti'>
             <div className="float-right mt-12 mb-12 items-center gap-4">
                    <PrimaryButton className="bg-red-600 pulsante float-right"  disabled={processing}>CANCELLA</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">CANCELLA.</p>
                    </Transition>
             </div>
            </div>
         </form>
        </div>
       </div>
      </div>
    </AuthenticatedLayout>
    );
}
