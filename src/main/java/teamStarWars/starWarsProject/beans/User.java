package teamStarWars.starWarsProject.beans;

import jakarta.persistence.*;

@Entity
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    @Column(unique=true)
    private String username;
    @Column(unique=true)
    private String address;
    private String password;
    private int permission;


    public User() {
    }

    public User(String username, String address, String password, int permission) {
        this.username = username;
        this.address = address;
        this.password = password;
        this.permission = permission;
    }

    public int getID()
    {
        return ID;
    }

    public void setID(int ID)
    {
        this.ID = ID;
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }

    public String getAddress()
    {
        return address;
    }

    public void setAddress(String address)
    {
        this.address = address;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public int getPermission()
    {
        return permission;
    }

    public void setPermission(int permission)
    {
        this.permission = permission;
    }
}
