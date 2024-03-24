package tn.esprit.codemasters.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
//@Profile("test")
public class Security{

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{

        return null;
    }

}
