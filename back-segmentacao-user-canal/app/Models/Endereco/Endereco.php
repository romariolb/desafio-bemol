<?php

namespace App\Models\Endereco;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipo',
        'cep',
        'rua',
        'numero',
        'bairo',
        'cidade',
        'uf',
        'referencia',
        'complemento',
    ];

    protected $table = 'enderecos';
}
