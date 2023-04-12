package com.bloggergate.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bloggergate.site.HackerNews;
import com.bloggergate.model.HackerResponse;

@CrossOrigin
@RestController
@RequestMapping("api/v1/hacker")
public class HackerNewsController {

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/blogs", produces = MediaType.APPLICATION_JSON_VALUE)
    public HackerResponse getBlogs(@RequestParam(name = "page", required = false) String page,
            @RequestParam(name = "date", required = false) String date) {

        return new HackerNews().getBlogs(page == null ? "1" : page, date);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/recent", produces = MediaType.APPLICATION_JSON_VALUE)
    public HackerResponse getRecentBlogs(@RequestParam(name = "next", required = false) String next) {

        return new HackerNews().getRecentBlogs(next);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping(value = "/top", produces = MediaType.APPLICATION_JSON_VALUE)
    public HackerResponse getTopBlogs(@RequestParam(name = "page", required = false) String page) {

        return new HackerNews().getTopBlogs(page == null ? "1" : page);
    }
}
