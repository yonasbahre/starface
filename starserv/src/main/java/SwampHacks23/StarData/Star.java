package SwampHacks23.StarData;

import java.util.ArrayList;
import java.util.List;

public class Star {
    public final int id;
    public String name;
    public String constellation;
    public int distance;
    public double solarMasses;
    public int temperature;
    public String fact;
    public String link;
    public final List<String> messages = new ArrayList<String>();

    public Star(int id,
                String name,
                String constellation,
                int distance,
                double solarMasses,
                int temperature,
                String fact,
                String link) {
        this.id = id;
        this.name = name;
        this.constellation = constellation;
        this.distance = distance;
        this.solarMasses = solarMasses;
        this.temperature = temperature;
        this.fact = fact;
        this.link = link;
    }

    public void addMessage(String message) {
        messages.add(message);
    }

    public String getStarResource() {
        if (temperature < 3000) {
            return "red";
        }
        else if (temperature < 4000) {
            return "orange";
        }
        else if (temperature < 8000) {
            return "yellow";
        }
        else if (temperature < 15000) {
            return "white";
        }
        else {
            return "blue";
        }
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Star{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", constellation='" + constellation + '\'' +
                ", distance=" + distance +
                ", solarMasses=" + solarMasses +
                ", temperature=" + temperature +
                ", fact='" + fact + '\'' +
                ", link='" + link + '\'' +
                ", messages=" + messages +
                '}';
    }
}


