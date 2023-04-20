package com.bloggergate.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bloggergate.model.HackerResponse;
import com.bloggergate.site.Lobste;

@CrossOrigin
@RestController
@RequestMapping("api/v1/lobste")
public class LobsteController {

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/blogs", produces = MediaType.APPLICATION_JSON_VALUE)
    public HackerResponse getBlogs(@RequestParam(name = "page", required = false) String page,
            @RequestParam(name = "query", required = false) String query) {
        return new Lobste().getBlogs(page == null ? "1" : page, query);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/recent", produces = MediaType.APPLICATION_JSON_VALUE)
    public HackerResponse getRecentBlogs(@RequestParam(name = "page", required = false) String page) {

        return new Lobste().getRecentBlogs(page == null ? "1" : page);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/top", produces = MediaType.APPLICATION_JSON_VALUE)
    public HackerResponse getTopBlogs(@RequestParam(name = "page", required = false) String page) {

        return new Lobste().getTopBlogs(page == null ? "1" : page);
    }
}
