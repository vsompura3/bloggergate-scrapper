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

public class HackerNews {

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
    private Integer blogId;

    public HackerResponse getBlogs(String page, String date) {
        String url = "https://news.ycombinator.com/?p=" + page;
        if (date != null) {
            // ! Date Format YYYY-MM-DD 2014-05-25
            url = "https://news.ycombinator.com/front?day=" + date + "&p=" + page;
        }
        try {
            Document doc = Jsoup.connect(url).get();
            return parser(doc);
        } catch (IOException ex) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Some error occured file fetching for blogs.");
        }
    }

    private HackerResponse parser(Document doc) {
        Elements baseElement = doc.select("#hnmain > tbody > tr#pagespace");
        baseElement = baseElement.next().select("td > table > tbody");

        if (baseElement.size() == 0) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "No result found");
        }
        for (Element e : baseElement.select("tr")) {
            if (e.select("a").hasClass("morelink")) {
                nextPageUrl = "https://news.ycombinator.com/" + e.select("a").attr("href");
            }
            if (e.hasClass("athing")) {

                blogTitle = e.select("span.titleline").text().trim();
                siteFrom = e.select("span.sitestr").text().trim();
                blogUrl = e.select("span.titleline").select("a").first().attr("href");
                if (!blogUrl.startsWith("http")) {
                    blogUrl = "https://news.ycombinator.com/" + blogUrl;
                }
                try {
                    blogId = Integer.parseInt(e.attr("id"));
                } catch (Exception Exception) {
                    blogId = null;
                }
                e = e.nextElementSibling();
                try {
                    score = Integer.parseInt(e.select(".score").text().trim().split(" ")[0]);
                } catch (Exception ecep) {
                    score = 0;
                }
                try {
                    uploader = e.select(".hnuser").text().trim();
                } catch (Exception ex) {
                    uploader = null;
                }
                try {
                    uploaderProfileUrl = "https://news.ycombinator.com/" + e.select(".hnuser").attr("href");
                } catch (Exception ex) {
                    uploaderProfileUrl = null;
                }
                try {
                    dateUploaded = e.select("span.age").attr("title");
                } catch (Exception ex) {
                    dateUploaded = null;
                }
                try {
                    timeElapsed = e.select("span.age").select("a").first().text().trim();
                } catch (Exception ex) {
                    timeElapsed = null;
                }
                try {
                    commentsCount = Integer
                            .parseInt(e.select("span.subline").select("a").last().text().trim().split(" ")[0]);
                } catch (Exception ex) {
                    commentsCount = 0;
                }
                blogs.add(new HackerNewsRecord(regularCount, blogId, blogTitle, blogUrl, score,
                        uploader, dateUploaded,
                        timeElapsed,
                        commentsCount, uploaderProfileUrl, siteFrom, null));
                regularCount++;

            }
        }
        HackerResponse res = new HackerResponse();
        res.data = blogs;
        res.next_page_url = nextPageUrl;
        return res;
    }

    public HackerResponse getRecentBlogs(String next) {
        String url = "https://news.ycombinator.com/newest";
        if (next != null) {
            url = "https://news.ycombinator.com/newest?next=" + next.trim();
        }
        try {
            Document doc = Jsoup.connect(url).get();
            return parser(doc);
        } catch (IOException ex) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Some error occured file fetching for blogs.");
        }
    }

    public HackerResponse getTopBlogs(String page) {
        String url = "https://news.ycombinator.com/best?p=" + page;
        try {
            Document doc = Jsoup.connect(url).get();
            return parser(doc);
        } catch (IOException ex) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Some error occured file fetching for blogs.");
        }
    }
}
