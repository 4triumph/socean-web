package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("monitoring_point")
@Data
public class Point {
    private String area;
    private String province;
    private String city;
    private String longitude;
    private String latitude;
    private String date;
    private String pcode;
    private float Ph;
    private float Do;
    private float Cdo;
    private float P;
    private String N;
    private String Oil;
    private String waterquality;

}
