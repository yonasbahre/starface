package SwampHacks23.StarData;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class StarDataController {

    @GetMapping("/star/{id}")
    public Star getStarData(@PathVariable int id) {
        return new Star(id, "name", "constellation", 10, 1.1, 1000, "fact");
    }

    @PostMapping("/star/{id}")
    public Star addStarMessage(@Valid @RequestBody String message) {
        star = new Star(id, "name", "constellation", 10, 1.1, 1000, "fact");
        return star.AddMessage(message);
    }
}
