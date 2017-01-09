---
layout: default
---
<div class="container">
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills float-right">
        <li class="nav-item">
          <a class="nav-link active" href="#">Core <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Role</a>
        </li>
      </ul>
    </nav>
    <h3 class="text-muted"><img src="/images/ibcos.png" width="45" height="45" class="d-inline-block align-middle" alt=""> Competency Library</h3>
  </div>

  <div class="row">
    <div class="col-lg">
      <h2>Core Competencies</h2>
      <p></p>
      <ul class="nav nav-tabs" role="tablist">
      {% for competency in site.competencies %}
      {% if competency.type == 'core' %}
        <li class="nav-item">
          <a class="nav-link{% if forloop.index == 1 %} active{% endif %}" data-toggle="tab" href="#{{ competency.title | downcase }}" role="tab">{{ competency.title }}</a>
        </li>
      {% endif %}
      {% endfor %}
      </ul>
      <div class="tab-content">
      {% for competency in site.competencies %}
      {% if competency.type == 'core' %}
        <div class="tab-pane fade{% if forloop.index == 1 %} show active{% endif %}" id="{{ competency.title | downcase }}" role="tabpanel">
          <h4>{{ competency.title }}</h4>
          <h5><span class="badge badge-default">{{ competency.tagline }}</span></h5>
          <ol>
          {% for definition in competency.definitions %}
            <li>{{ definition.title }}</li>
          {% endfor %}
          </ol>
          <table class="table table-hover">
            <thead class="thead-default">
              <tr>
                <th>&nbsp;</th>
                <th>Unsatisfactory</th>
                <th>Needs Improvement</th>
                <th>Meets Expectations</th>
                <th>Exceeds Expectations</th>
                <th>Exceptional</th>
              </tr>
            </thead>
            {% for definition in competency.definitions %}
            <tr>
              <td>
                <button type="button" class="btn btn-success" data-container="body" data-toggle="popover" data-trigger="focus" data-placement="top" title="{{ competency.title }}" data-content="{{ forloop.index }}. {{ definition.title }}">{{ forloop.index }}</button>
              </td>
              <td>
                <ul>
                {% for unsatisfactory in definition.unsatisfactories %}
                  <li>{{ unsatisfactory.example }}</li>
                {% endfor %}
                </ul>
              </td>
              <td>
                <ul>
                {% for need in definition.needs %}
                  <li>{{ need.example }}</li>
                {% endfor %}
                </ul>
              </td>
              <td>
                <ul>
                {% for meet in definition.meets %}
                  <li>{{ meet.example }}</li>
                {% endfor %}
                </ul>
              </td>
              <td>
                <ul>
                {% for exceed in definition.exceeds %}
                  <li>{{ exceed.example }}</li>
                {% endfor %}
                </ul>
              </td>
              <td>
                <ul>
                {% for exceptional in definition.exceptionals %}
                  <li>{{ exceptional.example }}</li>
                {% endfor %}
                </ul>
              </td>
            </tr>
            {% endfor %}
          </table>
        </div>
      {% endif %}
      {% endfor %}
      </div>
    </div>
  </div>
  <footer class="footer">
    <p>Designed with <i class="fa fa-heart" aria-hidden="true"></i> in Poole - &copy; Ibcos 2017</p>
  </footer>
</div>