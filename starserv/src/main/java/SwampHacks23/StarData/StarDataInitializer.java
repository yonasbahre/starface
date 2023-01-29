package SwampHacks23.StarData;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

import dev.willbanders.storm.Storm;

public class StarDataInitializer {

    private static final String STAR_DATA;

    static {
        try {
            STAR_DATA = Files.readString(Path.of("data/stardata.storm"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static List<Star> initialize() {
        return Storm.deserialize(STAR_DATA).get(Storm.LIST.of(star -> new Star(
               star.get("id", Storm.INTEGER),
               star.get("name", Storm.STRING),
               star.get("constellation", Storm.STRING),
               star.get("distance", Storm.INTEGER),
               star.get("mass", Storm.DOUBLE),
               star.get("temperature", Storm.INTEGER),
               star.get("fact", Storm.STRING),
               star.get("link", Storm.STRING)
        )));
    }
}