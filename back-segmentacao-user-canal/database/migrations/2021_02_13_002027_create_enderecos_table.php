<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnderecosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enderecos', function (Blueprint $table) {
            $table->id();
            $table->string('tipo', 100)->nullable();
            $table->string('cep', 100)->nullable();
            $table->string('rua', 100)->nullable();
            $table->string('numero', 100)->nullable();
            $table->string('bairo', 100)->nullable();
            $table->string('cidade', 100)->nullable();
            $table->string('uf', 100)->nullable();
            $table->string('referencia', 100)->nullable();
            $table->string('complemento', 100)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('enderecos');
    }
}
