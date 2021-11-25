<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TicketingModel extends CI_Model {

    protected $id;
    protected $ticket_number;    
    protected $subject;        
    protected $message;
    protected $status;    
    protected $priority;    
    protected $query;
    protected $STATUS_OPEN = "Open";
    protected $STATUS_ANSW = "Answered";
    protected $STATUS_CLOSED = "Closed";
    protected $PRIORITY_HIGH = "High";
    protected $PRIORITY_MED = "Medium";
    protected $PRIORITY_LOW = "Low";

    function __construct() {
        parent::__construct();
        $this->load->database();
    }

	public function addNewTicket($subject, $message, $priority){

        $this->id = uniqid('', false);
        $this->ticket_number = random_int(100, 100000);
        $this->subject = $subject;
        $this->message = $message;
        $this->status = $this->STATUS_OPEN;
        $this->priority = $priority;        

        $this->query = $this->db->query("INSERT INTO ticketing VALUES('$this->id', '$this->ticket_number','$this->subject', 
            '$this->message','$this->status','$this->priority')");

        if ($this->query) {            
            return $this->getTicketByID($this->id);

        }else{
            return 0;
        }
    }

    public function replyTicket($ticket_number, $message){

        $this->query = $this->db->query("UPDATE ticketing SET message = '$message', status = '$this->STATUS_ANSW' where ticket_number = '$ticket_number'");

        if ($this->query) {            
            return $this->getTicketByTicketNumber($ticket_number);

        }else{
            return 0;
        }
    }

    public function closeTicket($ticket_number){

        $this->query = $this->db->query("UPDATE ticketing SET status = '$this->STATUS_CLOSED' where ticket_number = '$ticket_number'");

        if ($this->query) {            
            return $this->getTicketByTicketNumber($ticket_number);

        }else{
            return 0;
        }
    }
    
    public function getTicketByLimit($limit){

    	$this->query = $this->db->query("SELECT id, ticket_number, subject, message, status, priority from ticketing limit $limit");
        
        $num = $this->query->num_rows();
        if($num>0){
            return $this->query->result();
            
        } else {
            return 0;            
        }
    }

    public function getTicketByID($id){

    	$this->query = $this->db->query("SELECT id, ticket_number, subject, message, status, priority from ticketing where id = '$id'");
        
        $num = $this->query->num_rows();
        if($num>0){            
            return $this->query->result();

        } else{
            return 0;            
        }
    }

    public function getTicketByTicketNumber($number){

    	$this->query = $this->db->query("SELECT id, ticket_number, subject, message, status, priority from ticketing where ticket_number = '$number'");
        
        $num = $this->query->num_rows();
        if($num>0){            
            return $this->query->result();

        } else{
            return 0;            
        }
    }
    
    public function deleteTicket($id){
        return $this->query = $this->db->query("DELETE FROM ticketing where id = '$id'");        
    }
}