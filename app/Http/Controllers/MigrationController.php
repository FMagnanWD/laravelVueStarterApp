<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class MigrationController extends Controller
{

    public function index()
    {
        $agencies = DB::table('personne')
            ->where('visible', 1)
            ->whereIn('groupe', [1, 10, 20])
            ->get();

        return view('agencies.migrations.index', compact('agencies'));
    }
}
