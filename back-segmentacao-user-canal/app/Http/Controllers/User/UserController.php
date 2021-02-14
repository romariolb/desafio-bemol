<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
     //
     public function index()
     {
         $users   = User::all();
 
         return $users;
 
     }
 
     public function show($id)
     {
         $user = User::find($id);

         $user['endereco'] = $user->endereco()->first();
 
         if(!$user){
             return response()->json([
                 'message'   => 'Record not found',
             ], 404);
         }
 
         return response()->json($user);
     }

     public function store(Request $request)
    {
        $user = new User();
        $user->fill($request->all());
        // $user->password = Hash::make($request->password);
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if(!$user) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $user->fill($request->all());
        // $user->password = Hash::make($request->password);
        // $user->password = Hash::make("password");
        $user->save();
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if(!$user) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $user->delete();
    }
}
