package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("corals")
@Data
public class Coral {
    private String VernacularNameCategory;
    private String longitude;
    private String latitude;


}
