package SwampHacks23.StarData;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.util.List;

@RestController
public class StarDataController {

    List<Star> stars = StarDataInitializer.initialize();

    @GetMapping("/star/{id}")
    public Star getStarData(@PathVariable int id) {
        if (id < stars.size()) {
            return stars.get(id);
        }
        return new Star(id, "name", "constellation", 10, 1.1, 1000, "fact", "www.google.com");
    }

    @GetMapping("/star/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable int id) throws IOException {

        Star star;

        if (id < stars.size()) {
            star = stars.get(id);
        }
        else {
            throw new IOException("Unable to find star " + id);
        }

        var imgFile = new ClassPathResource("images/" + star.getStarResource() + ".gif");
        byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());

        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_GIF)
                .body(bytes);
    }

    @PostMapping(value = "/star/{id}")
    public Star addStarMessage(@RequestBody String message, @PathVariable int id) {
        if (id < stars.size()) {
            stars.get(id).addMessage(message);
            return stars.get(id);
        };
        return null;
    }
}
