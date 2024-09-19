package com.example.demo.controller;

import com.example.demo.entity.Station;
import com.example.demo.mapper.StationMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/station")
public class StationController {

    @Autowired
    private StationMapper stationMapper;

    //获取温度数据
    @RequestMapping("BSG/temp")
    public List<Station> BSGtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","BSG").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("BSG/wwwegiht")
    public List<Station> BSGwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","BSG").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("BSG/wind")
    public List<Long> BSGwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "BSG").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "BSG").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("BSG/wwperiod")
    public List<Long> BSGwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "BSG").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    @RequestMapping("BSG/windspeed")
    public List<Long> BSGwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "BSG").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

     @RequestMapping("BSG/airpressure")
    public List<Station> BSGairpressureselect(){
         QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
         stationQueryWrapper.like("name","BSG").select("airpressure");
         return stationMapper.selectList(stationQueryWrapper);
     }

    @RequestMapping("DCN/temp")
    public List<Station> DCNtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","DCN").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("DCN/wwwegiht")
    public List<Station> DCNwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","DCN").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("DCN/wind")
    public List<Long> DCNwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "DCN").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "DCN").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("DCN/wwperiod")
    public List<Long> DCNwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "DCN").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    @RequestMapping("DCN/windspeed")
    public List<Long> DCNwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "DCN").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    @RequestMapping("DCN/airpressure")
    public List<Station> DCNairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","DCN").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }

    @RequestMapping("DSN/temp")
    public List<Station> DSNtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","DSN").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("DSN/wwwegiht")
    public List<Station> DSNwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","DSN").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("DSN/wind")
    public List<Long> DSNwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "DSN").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "DSN").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("DSN/wwperiod")
    public List<Long> DSNwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "DSN").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("DSN/windspeed")
    public List<Long> DSNwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "DSN").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("DSN/airpressure")
    public List<Station> DSNairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","DSN").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }

    @RequestMapping("LHT/temp")
    public List<Station> LHTtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","LHT").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("LHT/wwwegiht")
    public List<Station> LHTwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","LHT").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("LHT/wind")
    public List<Long> LHTwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "LHT").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "LHT").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("LHT/wwperiod")
    public List<Long> LHTwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "LHT").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("LHT/windspeed")
    public List<Long> LHTwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "LHT").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("LHT/airpressure")
    public List<Station> LHTairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","LHT").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }


    @RequestMapping("LYG/temp")
    public List<Station> LYGtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","LYG").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("LYG/wwwegiht")
    public List<Station> LYGwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","LYG").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("LYG/wind")
    public List<Long> LYGwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "LYG").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "LYG").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("LYG/wwperiod")
    public List<Long> LYGwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "LYG").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("LYG/windspeed")
    public List<Long> LYGwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "LYG").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("LYG/airpressure")
    public List<Station> LYGairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","LYG").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }



    @RequestMapping("NJI/temp")
    public List<Station> NJItempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","NJI").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("NJI/wwwegiht")
    public List<Station> NJIwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","NJI").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("NJI/wind")
    public List<Long> NJIwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "NJI").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "NJI").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("NJI/wwperiod")
    public List<Long> NJIwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "NJI").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("NJI/windspeed")
    public List<Long> NJIwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "NJI").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("NJI/airpressure")
    public List<Station> NJIairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","NJI").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }



    @RequestMapping("SSN/temp")
    public List<Station> SSNtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","SSN").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("SSN/wwwegiht")
    public List<Station> SSNwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","SSN").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("SSN/wind")
    public List<Long> SSNwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "SSN").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "SSN").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("SSN/wwperiod")
    public List<Long> SSNwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "SSN").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("SSN/windspeed")
    public List<Long> SSNwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "SSN").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("SSN/airpressure")
    public List<Station> SSNairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","SSN").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }



    @RequestMapping("XCS/temp")
    public List<Station> XCStempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","XCS").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("XCS/wwwegiht")
    public List<Station> XCSwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","XCS").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("XCS/wind")
    public List<Long> XCSwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "XCS").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "XCS").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("XCS/wwperiod")
    public List<Long> XCSwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "XCS").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("XCS/windspeed")
    public List<Long> XCSwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "XCS").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("XCS/airpressure")
    public List<Station> XCSairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","XCS").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }


    @RequestMapping("XMD/temp")
    public List<Station> XMDtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","XMD").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("XMD/wwwegiht")
    public List<Station> XMDwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","XMD").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("XMD/wind")
    public List<Long> XMDwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "XMD").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "XMD").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("XMD/wwperiod")
    public List<Long> XMDwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "XMD").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("XMD/windspeed")
    public List<Long> XMDwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "XMD").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("XMD/airpressure")
    public List<Station> XMDairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","XMD").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }

    @RequestMapping("ZFD/temp")
    public List<Station> ZFDtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZFD").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("ZFD/wwwegiht")
    public List<Station> ZFDwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZFD").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("ZFD/wind")
    public List<Long> ZFDwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "ZFD").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "ZFD").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("ZFD/wwperiod")
    public List<Long> ZFDwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "ZFD").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("ZFD/windspeed")
    public List<Long> ZFDwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "ZFD").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("ZFD/airpressure")
    public List<Station> ZFDairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZFD").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }


    @RequestMapping("ZHI/temp")
    public List<Station> ZHItempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZHI").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("ZHI/wwwegiht")
    public List<Station> ZHIwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZHI").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("ZHI/wind")
    public List<Long> ZHIwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "ZHI").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "ZHI").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("ZHI/wwperiod")
    public List<Long> ZHIwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "ZHI").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("ZHI/windspeed")
    public List<Long> ZHIwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "ZHI").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("ZHI/airpressure")
    public List<Station> ZHIairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZHI").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }


    @RequestMapping("ZLG/temp")
    public List<Station> ZLGtempselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZLG").select("seatemp", "airtemp");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取海浪高度数据
    @RequestMapping("ZLG/wwwegiht")
    public List<Station> ZLGwwwegihtselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZLG").select("windwaveheight");
        return stationMapper.selectList(stationQueryWrapper);
    }

    //获取风向数据
    @RequestMapping("ZLG/wind")
    public List<Long> ZLGwindselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        List<Long> list = new ArrayList<>();
        stationQueryWrapper.like("name", "ZLG").notBetween("winddirection",11.26,348.75);
        list.add(stationMapper.selectCount(stationQueryWrapper));
        double i;
        for(i=11.26;i<360;i=i+22.50) {
            QueryWrapper<Station> stationQueryWrapper1 = new QueryWrapper<>();
            stationQueryWrapper1.like("name", "ZLG").between("winddirection", i, i + 22.49);
            list.add(stationMapper.selectCount(stationQueryWrapper1));
        }
        return list;
    }

    //获取风浪周期数据
    @RequestMapping("ZLG/wwperiod")
    public List<Long> ZLGwwperiodselect(){
        List<Long> list = new ArrayList<>();
        Integer arr[] = {6,8,10,16};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "ZLG").between("windwaveperiod", arr[i], arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取风速数据
    @RequestMapping("ZLG/windspeed")
    public List<Long> ZLGwindspeedselect(){
        List<Long> list = new ArrayList<>();
        Double arr[] = {0.2,1.5,3.3,5.4,7.9,10.7,13.8};
        Integer i;
        for(i=0;i< arr.length-1;i=i+1) {
            QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
            stationQueryWrapper.like("name", "ZLG").between("windspeed", arr[i]+0.1, arr[i+1]);
            list.add(stationMapper.selectCount(stationQueryWrapper));
        }
        return list;
    }

    //获取气压数据
    @RequestMapping("ZLG/airpressure")
    public List<Station> ZLGairpressureselect(){
        QueryWrapper<Station> stationQueryWrapper = new QueryWrapper<>();
        stationQueryWrapper.like("name","ZLG").select("airpressure");
        return stationMapper.selectList(stationQueryWrapper);
    }

}
