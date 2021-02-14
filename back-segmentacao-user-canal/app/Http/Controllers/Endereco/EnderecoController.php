<?php

namespace App\Http\Controllers\Endereco;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Endereco\Endereco;

class EnderecoController extends Controller
{
    //
    public function index()
     {
         $enderecos   = Endereco::all();
 
         return $enderecos;
 
     }
 
     public function show($id)
     {
         $endereco = Endereco::find($id);
 
         if(!$endereco){
             return response()->json([
                 'message'   => 'Record not found',
             ], 404);
         }
 
         return response()->json($endereco);
     }

     public function store(Request $request)
    {
        $endereco = new Endereco();
        $endereco->fill($request->all());
        // $user->password = Hash::make($request->password);
        $endereco->save();

        return response()->json($endereco, 201);
    }

    public function update(Request $request, $id)
    {
        $endereco = Endereco::find($id);

        if(!$endereco) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $endereco->fill($request->all());
        // $user->password = Hash::make($request->password);
        // $user->password = Hash::make("password");
        $endereco->save();
    }

    public function destroy($id)
    {
        $endereco = Endereco::find($id);

        if(!$endereco) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $endereco->delete();
    }
}
