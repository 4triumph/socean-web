package com.example.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.demo.entity.Point;
import com.example.demo.mapper.PointMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/point")
public class PointController {

    @Autowired
    private PointMapper pointMapper;

    @RequestMapping("/list")
    public List<Point> select(){
        QueryWrapper<Point> pointQueryWrapper = new QueryWrapper<>();
        pointQueryWrapper.select("area","province","pcode","date","waterquality").like("date","2024%").orderByDesc("date");
        //System.out.println(pointMapper.selectList(pointQueryWrapper));
        return pointMapper.selectList(pointQueryWrapper);
    }

    @RequestMapping("/location")
    public List<Point> locationselect(){
        QueryWrapper<Point> pointQueryWrapper = new QueryWrapper<>();
        pointQueryWrapper.select("area","longitude","latitude","waterquality").like("date","2024-04").orderByDesc("date");
        //System.out.println(pointMapper.selectList(pointQueryWrapper));
        return pointMapper.selectList(pointQueryWrapper);
    }
}
