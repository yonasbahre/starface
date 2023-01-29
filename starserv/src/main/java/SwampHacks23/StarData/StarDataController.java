package SwampHacks23.StarData;

import org.springframework.web.bind.annotation.*;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

@RestController
public class StarDataController {

    List<Star> stars = StarDataInitializer.initialize();

    @CrossOrigin
    @GetMapping("/star/{id}")
    public Star getStarData(@PathVariable int id) {
        if (id < stars.size()) {
            return stars.get(id);
        }
        return new Star(id, "name", "constellation", 10, 1.1, 1000, "fact", "www.google.com");
    }

    @CrossOrigin
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

    @CrossOrigin
    @GetMapping("/star/{id}/poster")
    public ResponseEntity<byte[]> getPoster(@PathVariable int id) throws IOException {

        Star star;

        if (id < stars.size()) {
            star = stars.get(id);
        }
        else {
            throw new IOException("Unable to find star " + id);
        }
        Poster.createPoster(star);

        var imgFile = Path.of("src/main/resources/images/posters/" + star.id + "poster.png");
        byte[] bytes = Files.readAllBytes(imgFile);


        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(bytes);
    }

    @CrossOrigin
    @PostMapping(value = "/star/{id}")
    public Star addStarMessage(@RequestBody String message, @PathVariable int id) {
        if (id < stars.size()) {
            stars.get(id).addMessage(message);
            return stars.get(id);
        };
        return null;
    }
}
