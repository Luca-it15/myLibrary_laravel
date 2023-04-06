
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {  Link, useForm } from '@inertiajs/react';
export default function FormInsert(status) {
    const { data, setData, post, processing, errors} = useForm({
        Isbn: "",
        Titolo: "",
        Autore: "",
        DataAggiunta: (new Date()).toISOString(),
        Trama: "",
        NumeroLetture: 0
    });
    const submit = (e) => {
        e.preventDefault();

        post(route('storebook'));
    };
    return(
    <form onSubmit={submit} className='form'>
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
            <InputLabel htmlFor="Titolo" value="Titolo" className='label'/>

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
        <div className="flex items-center justify-end mt-4">
                <Link
                    href={route('storebook')}
                    className=" underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                </Link>
            <PrimaryButton className="ml-4 colorePulsante" disabled={processing}>
                AGGIUNGI
            </PrimaryButton>
        </div>
    </form>
   );
}
