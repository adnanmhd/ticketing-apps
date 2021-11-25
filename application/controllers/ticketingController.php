<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class TicketingController extends CI_Controller {

	public function __construct() {
        parent::__construct();        
        $this->load->helper('form','url');                
    }   
	
	public function index()
	{	
		$this->load->view('index');
	}	

}
