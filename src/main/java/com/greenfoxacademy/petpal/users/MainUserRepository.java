package com.greenfoxacademy.petpal.users;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MainUserRepository<T extends SuperUser> extends JpaRepository<T, Long> {
  Optional<T> findByUsername(String username);
  Boolean existsByUsername (String username);
  T save(T t );
}
