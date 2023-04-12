package com.bloggergate.site;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;
import com.bloggergate.model.HackerNewsRecord;
import com.bloggergate.model.HackerResponse;

public class Lobste {
    private static String baseUrl = "https://lobste.rs";

    // Responsers
    private List<HackerNewsRecord> blogs = new ArrayList<>();
    private String blogTitle;
    private String blogUrl;
    private Integer score;
    private String uploader;
    private String dateUploaded;
    private String timeElapsed;
    private Integer commentsCount;
    private String uploaderProfileUrl;
    private Integer regularCount = 1;
    private String nextPageUrl = null;
    private String siteFrom;
    private Integer blogId = null;

    public HackerResponse getBlogs(String page, String query) {
        String url = baseUrl + "/page/" + page;
        if (query != null) {
            url = baseUrl + "/search?q=" + query + "&what=stories&order=newest&page=" + page;
        }
        System.out.println(url);
        try {
            Document doc = Jsoup.connect(url).get();
            return parser(doc);
        } catch (IOException ex) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Some error occured file fetching for blogs.");
        }
    }

    private HackerResponse parser(Document doc) {

        Elements baseElement = doc.select("li.story ");
        if (baseElement.size() == 0) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "No result found");
        }
        for (Element e : baseElement.select("li")) {
            List<String> tags = new ArrayList<>();
            blogTitle = e.select("a.u-url").text().trim();
            blogUrl = e.select("a.u-url").attr("href");
            siteFrom = e.select("a.domain").text().trim();
            uploader = e.select("a.u-author").text().trim();
            timeElapsed = e.select("a.u-author").next().text();
            dateUploaded = e.select("a.u-author").next().attr("title");
            uploaderProfileUrl = "https://lobste.rs" + e.select("div.byline").select("a").attr("href");
            try {
                commentsCount = Integer
                        .parseInt(e.select("span.comments_label").select("a").text().trim().split(" ")[0]);
            } catch (Exception ex) {

            }
            try {
                score = Integer.parseInt(e.select("div.score").text().trim());
            } catch (Exception ex) {
            }
            try {
                for (Element tg : e.select("span.tags > a")) {
                    tags.add(tg.select("a.tag").text());
                }
            } catch (Exception exx) {
            }
            blogs.add(new HackerNewsRecord(regularCount, blogId, blogTitle, blogUrl, score,
                    uploader, dateUploaded,
                    timeElapsed,
                    commentsCount, uploaderProfileUrl, siteFrom, tags));
            regularCount++;
        }
        HackerResponse res = new HackerResponse();
        res.data = blogs;
        res.next_page_url = nextPageUrl;
        return res;
    }

    public HackerResponse getRecentBlogs(String page) {
        String url = "https://lobste.rs/newest/page/" + page;
        try {
            Document doc = Jsoup.connect(url).get();
            return parser(doc);
        } catch (IOException ex) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Some error occured file fetching for blogs.");
        }
    }

    public HackerResponse getTopBlogs(String page) {
        String url = "https://lobste.rs/top/page/" + page;
        try {
            Document doc = Jsoup.connect(url).get();
            return parser(doc);
        } catch (IOException ex) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Some error occured file fetching for blogs.");
        }
    }

}
