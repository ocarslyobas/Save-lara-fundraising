<?php
  class Users extends Controller{
    public function __construct(){
      $this->userModel = $this->model('User');
    }

    public function index(){
      //redirect('products');
    }

    public function loadData(){
      // Check if logged in
      // if($this->isLoggedIn()){
      //   redirect('products');
      // }

      // Check if POST
      if($_SERVER['REQUEST_METHOD'] == 'POST'){
        // Sanitize POST
        $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
        $time = date('smhdmy');
        $sku_id = 'pId' . md5(rand(1000000, 9000000)) . $time;
        $data = [
          'name' => trim($_POST['name']),
          'email' => trim($_POST['email']),
          'sku_id' => $sku_id,
          'amount' => trim($_POST['amount']),
          'validate_payment' => trim($_POST['validate_payment']),
          'name_err' => '',
          'validate_payment_err' => '',
          'email_err' => '',
          'amount_err' => '',
        ];
        // print_r(json_encode($data));
        // exit;
        // Validate email
        if(empty($data['email'])){
            $data['email_err'] = 'Please enter an email';
            // Validate name
            if(empty($data['name'])){
              $data['name_err'] = 'Please enter a name';
            }
        } else{
          // Check Email
          // echo "hello";
          // exit;
          if($this->userModel->findUserByEmail($data['email'])){
          //   echo "hello";
          // exit;
            $data['email_err'] = 'Email is already taken.';
          }
        }
        if (empty($data['validate_payment'])) {
          $data['validate_payment_err'] = 'Please validate  payment ';
        }

        // Validate password
        if(empty($data['amount'])){
          $data['amount_err']= 'Please enter a amount.';     
        } elseif(($data['amount']) === 0){
          $data['amount_err'] = 'amount must not be 0';
        }

        // // Validate confirm password
        // if(empty($data['confirm_password'])){
        //   $data['confirm_password_err'] = 'Please confirm password.';     
        // } else{
        //     if($data['password'] != $data['confirm_password']){
        //         $data['confirm_password_err'] = 'Password do not match.';
        //     }
        // }
         
        // Make sure errors are empty
        if(empty($data['name_err']) && empty($data['email_err']) && empty($data['amount_err']) && empty($data['validate_payment_err'])){
          // SUCCESS - Proceed to insert

          // Hash Password
          //$data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);

          //Execute
          if($this->userModel->loadData($data)){
            // Redirect to login
            //flash('register_success', 'You are now registered and can log in');
            $response =[
              "status" => 200,
              "message"=> "successfully loaded",
              "data" => $data
            ];
             print_r(json_encode($response));
            //redirect('users/login');
          } else {
            $response =[
              "status" => 500,
              "message"=> "something went wrong",
              "data" => $data
            ];
             print_r(json_encode($response));
          }
           
        } else {
          // Load View
          $response =[
            "status" => 300,
            "message"=> "incomplete params",
            "data" => $data
          ];
           print_r(json_encode($response));
          //$this->view('users/register', $data);
        }
      } else {
        // IF NOT A POST REQUEST

        // Init data
        $data = [
          'name' => '',
          'email' => '',
          'password' => '',
          'confirm_password' => '',
          'name_err' => '',
          'email_err' => '',
          'password_err' => '',
          'confirm_password_err' => ''
        ];

        // Load View
        $response =[
          "status" => 200,
          "message"=> "wrong request method",
          "data" => $data
        ];
         print_r(json_encode($response));
        //$this->view('users/register', $data);
      }
    }

    public function currentRow(){
      // Check if logged in
      // if($this->isLoggedIn()){
      //   $response =[
      //     "status" => 200,
      //     "message"=> "loggedin successfully"
      //   ];
      //   // print_r(json_encode($response));
      //   redirect('products/index');
      // }
      if($this->userModel->currentRow()){
        // Redirect to login
        //flash('register_success', 'You are now registered and can log in');
        $response =[
          "data" => $this->userModel->currentRow()
        ];
         print_r(json_encode($response));
        //redirect('users/login');
      } else {
        $response =[
          "data"=>  $this->userModel->currentRow()
        ];
         print_r(json_encode($response));
      }

  //     // Check if POST
  //     if($_SERVER['REQUEST_METHOD'] == 'POST'){
  //       // Sanitize POST
  //       $_POST  = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
        
  //       $data = [       
  //         'email' => trim($_POST['email']),
  //         'password' => trim($_POST['password']),        
  //         'email_err' => '',
  //         'password_err' => '',       
  //       ];

  //       // Check for email
  //       if(empty($data['email'])){
  //         $data['email_err'] = 'Please enter email.';
  //       }

  //       // Check for name
  //       if(empty($data['name'])){
  //         $data['name_err'] = 'Please enter name.';
  //       }

  //       // Check for user
  //       if($this->userModel->findUserByEmail($data['email'])){
  //         // User Found
  //       } else {
  //         // No User
  //         $data['email_err'] = 'This email is not registered.';
  //       }

  //       // Make sure errors are empty
  //       if(empty($data['email_err']) && empty($data['password_err'])){

  //         // Check and set logged in user
  //         $loggedInUser = $this->userModel->login($data['email'], $data['password']);

  //         if($loggedInUser){
  //           // User Authenticated!
  //           $this->createUserSession($loggedInUser);
           
  //         } else {
  //           $data['password_err'] = 'Password incorrect.';
  //           // Load View
  //           $response =[
  //             "status" => 200,
  //             "message"=> "wrong params",
  //             "data" => $data
  //           ];
  //           // print_r(json_encode($response));
  //          $this->view('users/login', $data);
  //         }
           
  //       } else {
  //         // Load View
  //         $response =[
  //           "status" => 300,
  //           "message"=> "incomplete params",
  //           "data" => $data
  //         ];
  //         // print_r(json_encode($response));
  //         $this->view('users/login', $data);
  //       }

  //     } else {
  //       // If NOT a POST

  //       // Init data
  //       $data = [
  //         'email' => '',
  //         'password' => '',
  //         'email_err' => '',
  //         'password_err' => '',
  //       ];

  //       // Load View
  //       $response =[
  //         "status" => 200,
  //         "message"=> "wrong request method",
  //         "data" => $data
  //       ];
  //       // print_r(json_encode($response));
  //       $this->view('users/login', $data);
  //     }
  //   }

  //   // Create Session With User Info
  //   public function createUserSession($user){
  //     $_SESSION['user_id'] = $user->id;
  //     $_SESSION['user_email'] = $user->email; 
  //     $_SESSION['user_name'] = $user->name;
  //     redirect('products');
  //   }

  //   // Logout & Destroy Session
  //   public function logout(){
  //     unset($_SESSION['user_id']);
  //     unset($_SESSION['user_email']);
  //     unset($_SESSION['user_name']);
  //     session_destroy();
  //     redirect('users/login');
  //   }

  //   // Check Logged In
  //   public function isLoggedIn(){
  //     if(isset($_SESSION['user_id'])){
  //       return true;
  //     } else {
  //       return false;
  //     }
   }
  }