package SwampHacks23.StarData;

import java.io.FileNotFoundException;
import java.io.FileReader;
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

    /*public static ArrayList<Star> Initialize() {
        //JSON parser object to parse read file
        JSONParser jsonParser = new JSONParser();

        try (FileReader reader = new FileReader("../data/stardata.json"))
        {
            //Read JSON file
            Object obj = jsonParser.parse(reader);

            JSONArray starList = (JSONArray) obj;


            ArrayList<Star> stars = new ArrayList<Star>();

            //Iterate over star array
            starList.forEach( star -> stars.add(parseStarObject( (JSONObject) star )) );

            return stars;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }


    private static Star parseStarObject(JSONObject star)
    {
        return new Star(
                Integer.valueOf((String) star.get("ID")),
                (String) star.get("Name"),
                (String) star.get("Constellation"),
                Integer.valueOf((String) star.get("Distance")),
                Double.valueOf((String) star.get("Mass")),
                Integer.valueOf((String) star.get("Temperature")),
                (String) star.get("Fact"),
                (String) star.get("Link"));
    }*/

}