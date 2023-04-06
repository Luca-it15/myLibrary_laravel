import { Link, Head } from '@inertiajs/react';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="home" />
            <div id="container" >
             <div id="loginArea" className='shadow-2xl'>
                <div id="intro" className='items-center'>
                   <h1>My Library</h1>
                   <img src="/img/libreria.webp" alt="libreria"></img>
                 </div>
                <div id="pulsanti" className='items-center'>
                    {auth.user ? (
                         <div className='login'>
                        <Link
                            href={route('dashboard')}
                            className="pulsante colorePulsante"
                        >
                            DASHBOARD
                        </Link>
                        </div>
                    ) : (
                        <>
                          <div className='login'>
                            <Link
                                href={route('login')}
                                className='pulsante colorePulsante'
                            >
                                LOG IN
                            </Link>
                            </div>
                            <div className='colore login mt-5 '>
                                <h4>Oppure</h4>
                            </div>
                            <div className='login'>
                            <Link
                                href={route('register')}
                                className='pulsante colorePulsante'
                            >
                                REGISTRATI
                            </Link>
                            </div>
                        </>
                    )}
                  </div>
                 <div className="float-left relative login mt-5">
                            <h4>Powered by Luca Chiocchetti</h4>
                 </div>
               </div>
            </div>
        </>
    );
}
