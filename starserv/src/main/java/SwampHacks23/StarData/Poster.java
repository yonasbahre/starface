package SwampHacks23.StarData;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class Poster {

    public static void createPoster(Star star) {

        BufferedImage image = new BufferedImage(800, 800, BufferedImage.TYPE_INT_RGB);

        Graphics2D graphics = image.createGraphics();

        Font orbitronFont = null;
        Font josefinSansFont = null;

        try {
            orbitronFont = Font.createFont(Font.TRUETYPE_FONT, new File("src/main/resources/static/Orbitron-Regular.ttf")).deriveFont(60f);
            josefinSansFont = Font.createFont(Font.TRUETYPE_FONT, new File("src/main/resources/static/JosefinSans-Regular.ttf")).deriveFont(20f);
        } catch (IOException|FontFormatException e) {
            System.out.println(e.toString());
        }

        switch (star.getStarResource()) {
            case "yellow":
                graphics.setColor(new Color(255, 250, 205));
                break;
            case "orange":
                graphics.setColor(new Color(255, 185, 80));
                break;
            case "red":
                graphics.setColor(new Color(255, 105, 97));
                break;
            case "white":
                graphics.setColor(new Color(230, 230, 230));
                break;
            default:
                graphics.setColor(new Color(135, 206, 235));
        }
        graphics.fillRect(0, 0, 800, 800);

        graphics.setColor(new Color(20, 20, 20));
        graphics.setFont(orbitronFont);
        int stringWidthLength = (int)
                graphics.getFontMetrics().getStringBounds(star.name, graphics).getWidth();
        graphics.drawString(star.name, image.getWidth() / 2 - stringWidthLength / 2, 80);

        graphics.setFont(orbitronFont.deriveFont(45f));
        stringWidthLength = (int)
                graphics.getFontMetrics().getStringBounds(star.constellation, graphics).getWidth();
        graphics.drawString(star.constellation, image.getWidth() / 2 - stringWidthLength / 2, 140);

        BufferedImage logo = null;
        try {
            logo = ImageIO.read(new File("src/main/resources/images/logo.png"));
        } catch (IOException e) {

        }
        graphics.drawImage(logo, image.getWidth()/2 - logo.getWidth()/2, image.getHeight()/2 - logo.getHeight()/2 - 60, null);


        graphics.setFont(josefinSansFont);
        int y = 550;
        for (int i = 0; i < star.messages.size(); i++) {
            String message = "\"" + star.messages.get(i) + "\"";
            if (message.length() < 70) {
                stringWidthLength = (int)
                        graphics.getFontMetrics().getStringBounds(message, graphics).getWidth();
                graphics.drawString(message, image.getWidth() / 2 - stringWidthLength / 2, y);
            }
            else {
                String string1 = message.substring(0, star.fact.indexOf(" ", 60));
                String string2 = message.substring(star.fact.indexOf(" ", 60));

                stringWidthLength = (int)
                        graphics.getFontMetrics().getStringBounds(string1, graphics).getWidth();
                graphics.drawString(string1, image.getWidth() / 2 - stringWidthLength / 2, y);
                y += graphics.getFontMetrics().getHeight();

                stringWidthLength = (int)
                        graphics.getFontMetrics().getStringBounds(string2, graphics).getWidth();
                graphics.drawString(string2, image.getWidth() / 2 - stringWidthLength / 2, y);
            }
            y += graphics.getFontMetrics().getHeight();
            if (y > 740) {
                break;
            }
        }

        if (star.fact.length() < 70) {
            stringWidthLength = (int)
                    graphics.getFontMetrics().getStringBounds(star.fact, graphics).getWidth();
            graphics.drawString(star.fact, image.getWidth() / 2 - stringWidthLength / 2, 780);
        }
        else {
            String string1 = star.fact.substring(0, star.fact.indexOf(" ", 50));
            String string2 = star.fact.substring(star.fact.indexOf(" ", 50));

            stringWidthLength = (int)
                    graphics.getFontMetrics().getStringBounds(string1, graphics).getWidth();
            graphics.drawString(string1, image.getWidth() / 2 - stringWidthLength / 2, 780 - graphics.getFontMetrics().getHeight());

            stringWidthLength = (int)
                    graphics.getFontMetrics().getStringBounds(string2, graphics).getWidth();
            graphics.drawString(string2, image.getWidth() / 2 - stringWidthLength / 2, 780);
        }
        graphics.dispose();
        try {
            ImageIO.write(image, "png", new File("src/main/resources/images/posters/" + star.id + "poster.png"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


    }

}