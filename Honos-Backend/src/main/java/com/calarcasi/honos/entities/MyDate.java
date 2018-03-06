package com.calarcasi.honos.entities;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MyDate extends Date {

	public MyDate() {
		// TODO Auto-generated constructor stub
	}
	
	public static Date stringToDate(String f) throws ParseException
	{
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
		return dateFormat.parse(f.substring(0, 10).replace("-", "/"));
	}
	
	
	public MyDate(String f) throws ParseException {		
		super(MyDate.stringToDate(f).getTime()); 
	}

	public MyDate(long date) {
		super(date);
	}

}
