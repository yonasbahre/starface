package SwampHacks23.StarData;

import java.util.ArrayList;

public class Star {
    public int id;
    public String name;
    public String constellation;
    public int distanceLightYears;
    public double solarMasses;
    public int temperature;
    public String fact;

    public ArrayList<String> messages;

    public Star(int id,
                String name,
                String constellation,
                int distanceLightYears,
                double solarMasses,
                int temperature,
                String fact) {
        this.id = id;
        this.name = name;
        this.constellation = constellation;
        this.distanceLightYears = distanceLightYears;
        this.solarMasses = solarMasses;
        this.temperature = temperature;
        this.fact = fact;
        this.messages = new ArrayList<String>();
    }

    public Star AddMessage(String message) {
        messages.add(message);
        return this;
    }
}


