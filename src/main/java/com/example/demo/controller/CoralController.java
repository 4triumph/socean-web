package com.example.demo.controller;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.demo.entity.Coral;
import com.example.demo.mapper.CoralMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/coral")
public class CoralController {

    @Autowired
    private CoralMapper coralMapper;

    @RequestMapping("/blackcoral")
    public List<Coral> bcselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","black coral");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/calcareoussponge")
    public List<Coral> csselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","calcareous sponge");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/demosponge")
    public List<Coral> dsselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","demosponge");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/glasssponge")
    public List<Coral> gsselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","glass sponge");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/goldcoral")
    public List<Coral> gcselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","gold coral");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/gorgoniancoral")
    public List<Coral> ggcselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","gorgonian coral");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/homoscleromorphsponge")
    public List<Coral> hsselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","homoscleromorph sponge");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/lacecoral")
    public List<Coral> lcselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","lace coral");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/lithotelestidcoral")
    public List<Coral> llcselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","lithotelestid coral");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/othercoral-likehydrozoan")
    public List<Coral> ocselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","other coral-like hydrozoan");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/seapen")
    public List<Coral> spselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","sea pen");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/softcoral")
    public List<Coral> scselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","soft coral");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/sponge(unspecified)")
    public List<Coral> suselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","sponge (unspecified)");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/stoloniferancoral")
    public List<Coral> stcselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","stoloniferan coral");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/stonycoral(branching)")
    public List<Coral> scbselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","stony coral (branching)");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/stonycoral(cupcoral)")
    public List<Coral> sccselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","stony coral (cup coral)");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }
    @RequestMapping("/stonycoral(unspecified)")
    public List<Coral> scuselect(){
        QueryWrapper<Coral> coralQueryWrapper = new QueryWrapper<>();
        coralQueryWrapper.select("longitude","latitude").like("VernacularNameCategory","stony coral (unspecified)");
        //System.out.println(coralMapper.selectList(coralQueryWrapper));
        return coralMapper.selectList(coralQueryWrapper);
    }

}
