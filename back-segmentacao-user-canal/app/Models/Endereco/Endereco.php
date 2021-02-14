<?php

namespace App\Models\Endereco;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Endereco extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipo',
        'cep',
        'rua',
        'numero',
        'bairro',
        'cidade',
        'uf',
        'referencia',
        'complemento',
        'user_id'
    ];

    protected $table = 'enderecos';

    /**
     * Get the user that owns the Endereco
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
