<?php


namespace App;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Admin extends Model
{
    protected $table = "admin";
    protected $primaryKey = "admin_id";
    public static function login(Request $request) {
        $admin = Admin::find($request->id);
        if($admin && $admin->password == $request->password) {
            return [
                'msg' => 'Đăng nhập thành công'
            ];
        }
        return [
            'msg' => 'Tài khoản hoặc mật khẩu không đúng'
        ];
    }
}
