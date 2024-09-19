package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("coastal_station")
@Data
public  class Station  {
    private String name;
    private String airtemp;
    private String seatemp;
    private double winddirection;
    private double windspeed;
    private String windwaveheight;
    private String windwaveperiod;
    private String date;
    private String airpressure;

}
