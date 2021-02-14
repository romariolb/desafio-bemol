<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nome')->nullable();
            $table->string('sobrenome')->nullable();
            $table->string('razao_social')->nullable();
            $table->date('data_nascimento')->nullable();
            $table->string('sexo', 100)->nullable();
            $table->string('cpf', 100)->nullable();
            $table->string('cnpj', 100)->nullable();
            $table->string('rg', 100)->nullable();
            $table->string('inscricao_estadual', 100)->nullable();
            $table->string('tel_cel', 100)->nullable();
            $table->string('tel_fixo', 100)->nullable();
            $table->string('login', 100)->nullable();
            $table->string('email')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->bigInteger('endereco_id')->nullable()->unsigned();
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('endereco_id')->references('id')->on('enderecos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
