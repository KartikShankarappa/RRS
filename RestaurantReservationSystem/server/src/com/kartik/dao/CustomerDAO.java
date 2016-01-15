package com.kartik.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import com.kartik.entities.Customer;
import com.kartik.entities.Reservation;
import com.kartik.exceptions.AppException;
import com.kartik.utils.DBUtils;

public class CustomerDAO {

	public List<Customer> listAllCustomers() throws AppException {

		List<Customer> customers = new ArrayList<Customer>();
		Customer customer = new Customer();
		Connection con = DBUtils.Connect();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try {
			ps = con.prepareStatement("SELECT * from customer");
			rs = ps.executeQuery();
			while (rs.next()) {
				customer = mapToCustomerEntity(rs);
				customers.add(customer);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new AppException(e.getMessage());
		}
		
		return customers;
	}
	
	
	
	public boolean addCustomer(Customer customer) throws AppException {
		
		Connection con = DBUtils.Connect();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		PreparedStatement pstmt = null;
		
		try {
			ps = con.prepareStatement("select * from customer where emailId = ?");
			ps.setString(1, customer.getEmailId());
			
			rs=ps.executeQuery();
			
			if(rs.next()) {
				DBUtils.closeResources(con, ps, rs);
				return false;
			} else {
				
				ps = con.prepareStatement("INSERT INTO customer(fname, lname, emailId, phoneNo) VALUES (?, ?, ?, ?)", PreparedStatement.RETURN_GENERATED_KEYS);
				
				ps.setString(1, customer.getFname());
				ps.setString(2, customer.getLname());
				ps.setString(3, customer.getEmailId());
				ps.setString(4, customer.getPhoneNumber());
				
				ps.executeUpdate();
				rs = ps.getGeneratedKeys();
				
				if(rs.next()) {
					DBUtils.closeResources(con, ps, rs);
					return true;
				}
								
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new AppException(e.getMessage());
		} finally {
			DBUtils.closeResources(con, ps, rs);
		}
		
		return false;
	}

	
	
	
	public static Customer mapToCustomerEntity(ResultSet rs) throws SQLException {
		Customer customer = new Customer();
		
		customer.setCustomerId(rs.getInt("custId"));
		customer.setFname(rs.getString("fname"));
		customer.setLname(rs.getString("lname"));
		customer.setEmailId(rs.getString("emailId"));
		customer.setPhoneNumber(rs.getString("phoneNo"));
		
		return customer;
	}
	
}
