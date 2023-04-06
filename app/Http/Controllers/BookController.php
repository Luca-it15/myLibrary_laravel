<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $books = Book::where('email', $request->user()->email)->get();
        return Inertia::render('Dashboard', [
            'books' => $books,
            'status' => session('status'),
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'Isbn' => 'required | max:100',
            'Titolo' => 'required | max:100',
            'Autore' => 'required | max:100',
            'DataAggiunta' => 'required | max:100',
            'Trama' => 'required | max:500',
            'NumeroLetture' => 'required | max:100'
        ]);

        $book = new Book();

        $book->Isbn = $request->input('Isbn');
        $book->Titolo = $request->input('Titolo');
        $book->Autore = $request->input('Autore');
        $book->DataAggiunta = $request->input('DataAggiunta');
        $book->Trama = $request->input('Trama');
        $book->NumeroLetture = $request->input('NumeroLetture');
        $book->email = $request->user()->email;

        $book->save();

        return redirect()->route('dashboard')->with('success', 'book added successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request): Response
    {
        //recupero più informazioni
        $bookTarget = Book::where('Isbn', $request->route('Isbn'))->get();
        return Inertia::render('Showbook', [
            'book' => $bookTarget,
            'status' => session('status'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
      $request->validate([
        'Isbn' => 'required | max:100',
        'Titolo' => 'required | max:100',
        'Autore' => 'required | max:100',
        'DataAggiunta' => 'required | max:100',
        'Trama' => 'required | max:500',
        'NumeroLetture' => 'required | max:100'
      ]);

      Book::where('Isbn', $request->input('Isbn'))->update([
        'Isbn' => $request->input('Isbn'),
        'Titolo' => $request->input('Titolo'),
        'Autore' => $request->input('Autore'),
        'DataAggiunta' => $request->input('DataAggiunta'),
        'Trama' => $request->input('Trama'),
        'NumeroLetture' => $request->input('NumeroLetture')
     ]);

      return redirect()->route('showbook', ['Isbn' =>  $request->input('Isbn')])->with('success', 'book updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $request->validate([
            'Isbn' => 'required | max:100',
          ]);

          Book::where('Isbn', $request->input('Isbn'))->update([
            'DataCancellazione' => date("Y-m-d"),
         ]);

         return redirect()->route('dashboard')->with('success', 'book added successfully');
    }
}
