package com.movies.movies.models;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;


//atributos de la Base Datos Creadas y que se conecta
@Entity
//Definir la tabla que queremos trabajar
@Table(name="peliculas")


public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
            private Long id;
            private String title;
            private String description;
            private int year;
            private int votes;
            private double rating;

    @Column(name = "img_url")
            private String imgUrl;

            
    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }
    public String getDescription(){
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getYear(){
        return year;
    }
    public void setYear(int year){
        this.year = year;
    }
    public int getVotes(){
        return votes;
    }
    public void setVotes(int votes){
        this.votes = votes;
    }
    public double getRating(){
        return rating;
    }
    public void setRating(double rating){
        this.rating = rating;
    }
    public String getImgUrl(){
        return imgUrl;
    }
    public void setImgUrl(String imgUrl){
        this.imgUrl = imgUrl;
    }

}
