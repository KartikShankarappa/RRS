package com.kartik.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import com.kartik.entities.Reservation;
import com.kartik.entities.ReservationTable;
import com.kartik.exceptions.AppException;
import com.kartik.utils.DBUtils;

public class TableDAO {

	public int findTable(Reservation reservation) throws AppException {
		
		Connection con = DBUtils.Connect();
		PreparedStatement ps = null;
		ResultSet rs = null;
		int tableNo = -1;
		
		try {
//			ps = con.prepareStatement("Select * from reservationtable where availability = '1' and maxOccupancy >= ");
			
			
//			String date = reservation.getDate();
//			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd"); // your template here
//			java.util.Date dateStr = formatter.parse(date);
//			java.sql.Date dateDB = new java.sql.Date(dateStr.getTime());
			
			
			
//			String time = reservation.getTime();
//			DateFormat formatFromHtml =  new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
//			formatFromHtml.setTimeZone(TimeZone.getTimeZone("EDT"));
//			System.out.println(TimeZone.getDefault());
//			DateFormat formatterToMySQL =  new SimpleDateFormat("H:mm:ss");
//			Date result = formatFromHtml.parse(time);
//			String validForTimeInMysql = formatterToMySQL.format(result);
			
			
			ps = con.prepareStatement("select tableNo from reservationTable where maxOccupancy >= ? and tableNo NOT IN ( select tableNo from reservation where date = ? and time = ? and reservationStatus = 'CONFIRMED') ");
			
			ps.setInt(1, reservation.getPartySize());
//			ps.setDate(2, dateDB);
			ps.setString(2, reservation.getDate());
//			ps.setString(3, validForTimeInMysql);
			ps.setString(3, reservation.getTime());
			
			rs = ps.executeQuery();
			
			if(rs.next()) {
				tableNo = rs.getInt("tableNo");
				System.out.println("Table Number selected is: " + tableNo);
			}			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new AppException(e.getMessage());
		} finally {
			DBUtils.closeResources(con, ps, rs);
		}
		
		return tableNo;
	}

	public List<ReservationTable> findAllTables() throws AppException {

		List<ReservationTable> reservationTables = new ArrayList<ReservationTable>();
		
		Connection con = DBUtils.Connect();
		PreparedStatement ps = null;
		ResultSet rs = null;
		ReservationTable reservationTable = new ReservationTable();
		
		try {
			ps = con.prepareStatement("SELECT * from reservationtable");
			rs = ps.executeQuery();
			
			while (rs.next()) {
				reservationTable = mapToReservationTableEntity(rs);
				reservationTables.add(reservationTable);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new AppException(e.getMessage());
		} finally {
			DBUtils.closeResources(con, ps, rs);
		}
		
		return reservationTables;
	}
	
	
	
	public boolean ifCurrentTableStillOk(Reservation reservation) throws AppException {
		
		Connection con = DBUtils.Connect();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		try{
			
//			String date = reservation.getDate();
//			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd"); // your template here
//			java.util.Date dateStr = formatter.parse(date);
//			java.sql.Date dateDB = new java.sql.Date(dateStr.getTime());
//			
			
			
//			String time = reservation.getTime();
//			DateFormat formatFromHtml =  new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
//			formatFromHtml.setTimeZone(TimeZone.getTimeZone("EDT"));
//			System.out.println(TimeZone.getDefault());
//			DateFormat formatterToMySQL =  new SimpleDateFormat("H:mm:ss");
//			Date result = formatFromHtml.parse(time);
//			String validForTimeInMysql = formatterToMySQL.format(result);
		
		
			ps = con.prepareStatement("SELECT tableNo from reservationtable where tableNo = ? and maxOccupancy >= ?");
			
			ps.setInt(1, reservation.getTableNumber());
			ps.setInt(2, reservation.getPartySize());
			rs = ps.executeQuery();
			
			if(rs.next()) {
				ps = con.prepareStatement("select rt.tableNo, temp.confNo from reservationTable rt, (select tableNo, confNo from reservation where date = ? and time = ? and reservationStatus = 'CONFIRMED') as temp where rt.tableNo = temp.tableNo and rt.tableNo = ?; ");
				
				ps.setString(1, reservation.getDate());
//				ps.setString(2, validForTimeInMysql);
				ps.setString(2, reservation.getTime());
				ps.setInt(3, reservation.getTableNumber());
				
				rs = ps.executeQuery();
				
				if(rs.next()) {
					if (reservation.getConfirmationNumber() == rs.getInt("ConfNo")) {
						return true;
					} else {
						return false;
					}
				} else {
					return true;
				}
			} else {
				
				return false;
			}
		
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new AppException(e.getMessage());
		} finally {
			DBUtils.closeResources(con, ps, rs);
		}
	}
	
	
	public static ReservationTable mapToReservationTableEntity(ResultSet rs) throws SQLException {
		
		ReservationTable reservationTable = new ReservationTable();
		
		reservationTable.setTableNumber(rs.getInt("tableNo"));
		reservationTable.setMaxOccupancy(rs.getInt("maxOccupancy"));
		reservationTable.setAvailability(rs.getBoolean("availability"));
		
		return reservationTable;
		
	}
}
