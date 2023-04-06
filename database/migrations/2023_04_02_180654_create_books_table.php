<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->bigInteger('Isbn')->primary();
            $table->string('Titolo', 200);
            $table->string('Autore', 200);
            $table->string('DataAggiunta', 200);
            $table->string('DataCancellazione', 200)->nullable();
            $table->text('Trama', 500);
            $table->integer('NumeroLetture');
            $table->string('Email');
            $table->timestamps();
            /*Utilizzo mysql*/
            $table->engine = 'InnoDB';
            $table->charset = 'utf8';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
