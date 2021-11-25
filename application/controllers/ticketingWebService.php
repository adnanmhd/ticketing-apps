<?php

require APPPATH . '/libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;

class TicketingWebService extends REST_Controller {

    function __construct($config = 'rest') {
        parent::__construct($config);
        $this->load->model('ticketingModel');    
    }   

    function getTicketing_post() {
        
        $limit = $this->post('limit_data');
        
        $data['ticket-data'] = $this->ticketingModel->getTicketByLimit($limit);    
        
        if ($data['ticket-data'] == 0) {
            $this->response(array('data' => 'belum ada ticket terdaftar'));

        } else {
            $this->response($data, 200);
        }
    } 
   
    function addNewTicket_post() {
        $subject = $this->post('subject');
        $message = $this->post('message');
        $priority = $this->post('priority');        

        $add['ticket-data'] = $this->ticketingModel->addNewTicket($subject, $message, $priority);        

        if ($add['ticket-data']  == 0) {
            $this->response(array('status' => 'failed add ticket', 502));
            
        } else {
            $add['message'] = 'ticket baru sukses ditambahkan';
            $this->response($add, 200);
        }
    }

    function replyTicket_post() {
        $ticket_number = $this->post('ticket_number');
        $message = $this->post('message');           

        $add['ticket-data'] = $this->ticketingModel->replyTicket($ticket_number, $message);        

        if ($add['ticket-data']  == 0) {
            $this->response(array('status' => 'failed', 502));
            
        } else {
            $add['message'] = 'ticket berhasil diupdate';
            $this->response($add, 200);
        }
    }

    function closeTicket_post() {
        $ticket_number = $this->post('ticket_number');                 

        $add['ticket-data'] = $this->ticketingModel->closeTicket($ticket_number);        

        if ($add['ticket-data']  == 0) {
            $this->response(array('status' => 'failed', 502));
            
        } else {
            $add['message'] = 'ticket berhasil diclose';
            $this->response($add, 200);
        }
    }

    function deleteTicket_post() {
        $ticket_id = $this->post('id');        

        $data['delete-ticket'] = $this->ticketingModel->deleteTicket($ticket_id);        

        if ($data['delete-ticket']) {
            $data['status'] = 'success';
            $data['message'] = 'delete ticket berhasil';
            $this->response($data, 200);
            
        } else {
            $data['status'] = 'failed';
            $data['message'] = 'delete ticket gagal';
            $this->response($data, 502);
        }
    }
}